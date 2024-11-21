import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  font-family: "Poppins", sans-serif;

  .container {
    display: flex;
    gap: 10px;
    flex-direction: row;
    width: 70%;
    max-width: 1000px;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
   
  }

  .container1 {
    width: 50%;
    background-color: #007bff;
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      font-weight: 400;
    }
  }

  .container2 {
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      label {
        font-size: 0.9rem;
        color: #333333;
        font-weight: 400;
      }

      input {
        width: 100%;
        padding: 0.8rem;
        font-size: 1rem;
        border: 1px solid #cccccc;
        border-radius: 5px;
        outline: none;
        transition: border-color 0.3s;

        &:focus {
          border-color: #007bff;
        }
      }

      button {
        width: 50%;
        
        
        padding: 0.8rem;
        font-size: 1rem;
        color: white;
        background-color: #007bff;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
`;
