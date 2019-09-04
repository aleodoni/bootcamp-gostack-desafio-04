import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  font-size: 12px;
  color: #787172;
  margin-top: 20px;

  align-items: center;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .header {
    display: flex;
    align-items: center;
  }

  .header .avatar {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    min-height: 32px;
    min-width: 32px;
  }

  .header .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    line-height: 14px;
  }

  .header .info span:first-child {
    margin-top: 4px;
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: bold;
  }

  .content {
    margin-top: 15px;
    font-size: 14px;
  }
`;
