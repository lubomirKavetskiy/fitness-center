import { screen } from '@testing-library/react';

// import { rest } from 'msw';
// import { defaultQueryClientOptions } from '../../../react-query/queryClient';
// import { server } from '../../../mocks/server';
// import { renderWithClient } from '../../../test-utils';
import { AllCoaches } from '../AllCoaches';

test('renders response from query', () => {
  // write test here
});

test('handles query error', async () => {
  // (re)set handler to return a 500 error for coaches
  // server.resetHandlers(
  //   rest.get('http://localhost:3030/coaches', (req, res, ctx) => {
  //     return res(ctx.status(500));
  //   }),
  // );
});
