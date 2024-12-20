import { test, expect } from '@playwright/test';

// Correct Tokens
const basic = 'YWRtaW46MTIzNDU2'; 
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6InNlY3JldC50eHQifQ.eyJ1c2VyIjoidGVzdCJ9.jqBFzyBB68KWiOvEJhcaDgMY0Gea-t0KNnf-fR2Ioyc';

//Incorrect Tokens
const incorrectBasic = 'token1'; 
const incorrectToken = 'token2';

test.describe('Authorization checks', () => {

  test('Try to authenticate with incorrect Auth Type', async ({ request }) => {
    const response = await request.get('http://rest.testsparker.com/{auth_type}/api/comments', { 
      headers: {
        Authorization: `Basic ${basic}`,
      },
    });  
    // Assert the response status
    expect(response.status()).toBe(400);
    // Get the response text
    const responseText = await response.text();
    // Assert the response text
    expect(responseText).toBe('Authentication type is wrong.'); 
  });
  

  });