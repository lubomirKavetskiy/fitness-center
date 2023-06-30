// import { rest } from 'msw';

import {
  mockAppointments,
  mockCoaches,
  mockTrainings,
  mockUserAppointments,
} from './mockData';

export const handlers = [
  // rest.get('http://localhost:3030/trainings', (req, res, ctx) => {
  //   return res(ctx.json(mockTrainings));
  // }),
  // rest.get('http://localhost:3030/coaches', (req, res, ctx) => {
  //   return res(ctx.json(mockCoaches));
  // }),
  // rest.get(
  //   'http://localhost:3030/appointments/:year/:month',
  //   (req, res, ctx) => {
  //     return res(ctx.json(mockAppointments));
  //   },
  // ),
  // rest.get('http://localhost:3030/user/:id/appointments', (req, res, ctx) => {
  //   return res(ctx.json({ appointments: mockUserAppointments }));
  // }),
  // rest.patch('http://localhost:3030/appointment/:id', (req, res, ctx) => {
  //   return res(ctx.status(200));
  // }),
];
