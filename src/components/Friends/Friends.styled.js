import styled from 'styled-components';

export const Friends = styled.ul`
  width: 250px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

export const FriendsItem = styled.li`
  max-width: 100%;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #fff;
  margin-top: 10px;
  padding: 20px 0 20px 0;
  font-weight: 600;
  font-size: 18px;
`;

export const Avatar = styled.img`
  border-radius: 20%;
  padding: 0px 10px 0px 10px;
`;

export const Online = styled.span`
  margin-left: 5px;
  height: 25px;
  width: 25px;
  background-color: rgb(23, 221, 99);
  border-radius: 50%;
  display: inline-block;
`;
export const Offline = styled.span`
  margin-left: 5px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  background-color: rgb(228, 16, 16);
`;

export const Name = styled.p`
  font-size: 20px;
`;
