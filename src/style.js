import styled from 'styled-components';
import {CloudOutlined} from '@ant-design/icons';
import {Button, Row} from 'antd';

const Container = styled.div`
  background: #ffffff;
  height: 100%;
  text-align: center;
`;

export const Wrapper = styled.div`
  background: #464d4b;
  width: 100%;
  height: 100%;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0 0 20px;
`;

export const DivTextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  row-gap: -10px;
  column-gap: -10px;
`;

export const TextHeader = styled.span`
  letter-spacing: 5px;
`;

export const Cloud = styled(CloudOutlined)`
  color: #3770e4;
  font-size: 50px;
  margin-right: 10px;
`;

export const TextP05 = styled.span`
  color: #62f90f;
  font-weight: 700;
  font-size: 28px;
`;

export const Divider = styled(TextP05)`
  position: absolute;
  top: 9%;
`;

export const Temperature = styled(TextP05)`
  color: #ffffff;
`;

export const RowStyle = styled(Row)`
  width: 100%;
  margin-top: 20px;
`;

export const TextLST = styled.span`
  color: #c8d458;
`;

export const ButtonCustom = styled(Button)`
  background: #464d4b;
  color: #ffffff;
  box-shadow: 0 4px 10px 0 #ffffff, 0 0px 10px 0 #ffffff;
`;

export const TextTemperature = styled.span`
  font-size: 50px;
  font-weight: 700;
  color: #62f90f;
`;

export const BoxCompany = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #c8d458;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const BoxHumidity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const DivTextHumidity = styled.div`
  width: 40%;
  height: 100px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`

export {Container};
