import React from 'react';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const Footer = () => {
  return (
    <div className={'footer'}>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://github.com/necro-mancer/non-fungible-matrix'}
        icon={<GithubOutlined />}
        style={{ marginRight: '20px' }}
      ></Button>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://twitter.com/gsissh_matrix'}
        icon={<TwitterOutlined />}
      ></Button>
    </div>
  );
};
