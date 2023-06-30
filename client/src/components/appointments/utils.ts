import dayjs from 'dayjs';

import type {
  Appointment,
  AppointmentDateMap,
  User,
} from '../../../../shared/types';

export function appointmentInPast(appointmentData: Appointment): boolean {
  const now = dayjs();
  return dayjs(appointmentData.dateTime) < now;
}

export function getAppointmentColor(
  appointmentData: Appointment,
  userId?: number,
): [string, string, string] {
  const taken = !!appointmentData.userId;
  const textColor = 'white';
  let cursor = 'pointer';

  if (taken || appointmentInPast(appointmentData)) {
    const bgColor = appointmentData.userId === userId ? 'blue.400' : 'red.400';

    if (appointmentData.userId !== userId) cursor = 'not-allowed';

    return [textColor, bgColor, cursor];
  }

  return [textColor, 'green.400', cursor];
}

export function getAvailableAppointments(
  appointments: AppointmentDateMap,
  user: User | null,
): AppointmentDateMap {
  // clone so as not to mutate argument directly
  const filteredAppointments = { ...appointments };

  // only keep appointments that are open (or taken by the logged-in user) and are not in the past)
  Object.keys(filteredAppointments).forEach((date) => {
    filteredAppointments[date] = filteredAppointments[date].filter(
      (appointment: Appointment) =>
        (!appointment.userId || appointment.userId === user?.id) &&
        !appointmentInPast(appointment),
    );
  });

  return filteredAppointments;
}
