import styled from 'styled-components';

export const Profile = styled.div`
  max-width: 428px;
  padding-top: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
`;

export const Description = styled.div`
  margin: 0 auto;
  padding: 30px 60px;
  text-align: center;
  background-color: #fff;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto 30px;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #122236;
`;
export const Tag = styled.p`
  font-size: 14px;
  color: #768696;
`;
export const Location = styled.p`
  font-size: 14px;
  color: #768696;
`;
export const Stats = styled.ul`
  padding-inline-start: 0;
  display: flex;
  list-style: none;
  border-top: 1px solid #e4e9ef;
`;
export const List = styled.li`
  width: 190px;
  border-right: 1px solid #e4e9ef;
  background-color: #f1f6fc;
  text-align: center;
  padding: 20px 0px 24px;
`;
export const Label = styled.span`
  display: block;
  font-size: 12px;
  color: #bec7d0;
`;
export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #1f3349;
`;
