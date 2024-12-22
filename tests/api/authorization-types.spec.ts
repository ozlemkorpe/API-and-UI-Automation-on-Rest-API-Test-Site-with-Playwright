import { test, expect } from '@playwright/test';

test.describe('Authorization checks', () => {
  const basic = 'ozlem'; 
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