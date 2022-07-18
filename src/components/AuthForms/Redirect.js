import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';

// ---- для вытягивания параметров с URL которые присылает бек -------
export const Redirect = () => {
  const [searchParams] = useSearchParams();
  console.log('SP_token:', searchParams.get('token'));
  console.log('SP_email:', searchParams.get('email'));
  console.log('SP_name:', searchParams.get('name'));

  return (
    <div>
      <Rings />
    </div>
  );
};
