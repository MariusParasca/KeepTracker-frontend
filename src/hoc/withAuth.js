import React, { useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

import authServer from 'shared/axios/authServer';
import httpStatus from 'shared/utils/httpStatus';
import Spinner from 'components/Spinner/Spinner';

const WithAuth = ({ component: ComponentToProtect, ...rest }) => {
  const Component = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const handleInvalidTokenError = useCallback(async (error) => {
      if (error.response.status === httpStatus.UNAUTHORIZED) {
        setIsLoading(true);
        try {
          const response = await authServer.post('token', {
            token: Cookies.get('refreshToken'),
          });
          Cookies.set('accessToken', response.data.accessToken);
          setIsLoading(false);
        } catch (error) {
          setRedirectToLogin(true);
        }
      } else {
        setRedirectToLogin(true);
      }
    }, []);

    useEffect(() => {
      const checkToken = async (params) => {
        try {
          const response = await authServer.post('checkToken', {
            token: Cookies.get('accessToken'),
          });
          if (response.status === httpStatus.OK) {
            setIsLoading(false);
          }
        } catch (error) {
          await handleInvalidTokenError(error);
        }
      };
      checkToken();
    }, [handleInvalidTokenError]);

    if (!redirectToLogin && isLoading) {
      return <Spinner />;
    }

    if (redirectToLogin) {
      return <Redirect to="/" />;
    }

    return <ComponentToProtect {...rest} />;
  };

  return <Component />;
};

export default WithAuth;
