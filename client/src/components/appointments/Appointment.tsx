import { Box, HStack, Text, Tooltip } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { ReactElement, useMemo } from 'react';

import { Appointment as AppointmentType, User } from '../../../../shared/types';
import { useUser } from '../user/hooks/useUser';
import { useCancelAppointment } from './hooks/useCancelAppointment';
import { useReserveAppointment } from './hooks/useReserveAppointment';
import { appointmentInPast, getAppointmentColor } from './utils';

// determine whether this appointment can be reserved / un-reserved by logged-in user
function isClickable(
  user: User | null,
  appointmentData: AppointmentType,
): boolean {
  return !!(
    user?.id &&
    (!appointmentData.userId || appointmentData.userId === user?.id) &&
    !appointmentInPast(appointmentData)
  );
}

interface AppointmentProps {
  appointmentData: AppointmentType;
}

export function Appointment({
  appointmentData,
}: AppointmentProps): ReactElement {
  const { user } = useUser();

  const reserveAppointment = useReserveAppointment();
  const cancelAppointment = useCancelAppointment();
  const [textColor, bgColor, cursor] = getAppointmentColor(
    appointmentData,
    user?.id,
  );

  const clickable = isClickable(user, appointmentData);
  const userAppointment = appointmentData.userId === user?.id;
  let onAppointmentClick: undefined | (() => void);
  let hoverCss = {};

  // turn the lozenge into a button if it's clickable
  if (clickable) {
    onAppointmentClick = user
      ? () =>
          userAppointment
            ? cancelAppointment(appointmentData)
            : reserveAppointment(appointmentData)
      : undefined;
    hoverCss = {
      transform: 'translateY(-1px)',
      boxShadow: 'md',
      cursor: 'pointer',
    };
  }

  const appointmentHour = dayjs(appointmentData.dateTime).format('h a');

  const label = useMemo(() => {
    if (clickable) {
      return userAppointment ? 'your appointment' : 'available';
    }
    return 'unavailable';
  }, [clickable, userAppointment]);

  return (
    <Tooltip label={label}>
      <Box
        borderRadius="lg"
        px={2}
        bgColor={bgColor}
        color={textColor}
        as={clickable ? 'button' : 'div'}
        onClick={onAppointmentClick}
        _hover={hoverCss}
        cursor={cursor}
      >
        <HStack justify="space-between">
          <Text as="span" fontSize="xs">
            {appointmentHour}
          </Text>
          <Text as="span" fontSize="xs">
            {appointmentData.trainingName}
          </Text>
        </HStack>
      </Box>
    </Tooltip>
  );
}
