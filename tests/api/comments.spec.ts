import { test, expect } from '@playwright/test';

// Correct Tokens
const basic = 'YWRtaW46MTIzNDU2'; 
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6InNlY3JldC50eHQifQ.eyJ1c2VyIjoidGVzdCJ9.jqBFzyBB68KWiOvEJhcaDgMY0Gea-t0KNnf-fR2Ioyc';

//Incorrect Tokens
const incorrectBasic = 'token1'; 
const incorrectToken = 'token2';
test.describe('Get all comments', () => {
    
  test('Get all comments with Basic Authentication', async ({ request }) => {
    const response = await request.get('http://rest.testsparker.com/basic_authentication/api/comments', {
      headers: {
        Authorization: `Basic ${basic}`,
      },
    }); 
    expect(response.status()).toBe(200);
    //const data = await response.text();
    //console.log(data);
  });

    test('Try get all comments with Incorrect Basic Authentication', async ({ request }) => {
      const response = await request.get('http://rest.testsparker.com/basic_authentication/api/comments', {
        headers: {
          Authorization: `Basic ${incorrectBasic}`,
        },
      }); 
      expect(response.status()).toBe(401);
    });

  test('Get all comments with Bearer JWT Authentication', async ({ request }) => {
    const response = await request.get('http://rest.testsparker.com/jwt/api/comments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); 
    expect(response.status()).toBe(200);
  });

  test('Try get all comments with Incorrect Bearer Authentication', async ({ request }) => {
    const response = await request.get('http://rest.testsparker.com/basic_authentication/api/comments', {
      headers: {
        Authorization: `Bearer ${incorrectToken}`,
      },
    }); 
    expect(response.status()).toBe(401);
  });

  });


