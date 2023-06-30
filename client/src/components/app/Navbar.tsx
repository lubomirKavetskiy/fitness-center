import { Box, Button, Flex, HStack, Icon, Link } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import { IoFitnessSharp } from 'react-icons/io5';
import {
  NavLink as RouterLink,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { useAuth } from '../../auth/useAuth';
import { useUser } from '../user/hooks/useUser';

const Links = ['Trainings', 'Coaches', 'Calendar'];

const NavLink = ({
  to,
  children,
  isActive = false,
}: {
  to: string;
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  isActive?: boolean;
}) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded="md"
    color={isActive ? 'olive' : 'white'}
    textDecoration={isActive ? 'underline' : 'none'}
    _hover={{
      textDecoration: 'none',
      color: 'olive.500',
    }}
    to={to}
    fontWeight={isActive ? 900 : 100}
    fontSize={isActive ? '20px' : '16px'}
    _focus={{ boxShadow: 'none' }}
  >
    {children}
  </Link>
);

export function Navbar(): ReactElement {
  const { user } = useUser();
  const { signout } = useAuth();
  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <Box bg="gray.900" px={4}>
      <Flex h={16} alignItems="center" justify="space-between">
        <HStack spacing={8} alignItems="center">
          <NavLink to="/">
            <Icon
              m={4}
              verticalAlign="top"
              as={IoFitnessSharp}
              fontSize="48px"
              color="olive"
              margin="0"
            />
          </NavLink>
          <HStack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={link}
                to={`/${link}`}
                isActive={pathname.substr(1) === link}
              >
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <HStack>
          {user ? (
            <>
              <NavLink to={`/user/${user.id}`}>{user.email}</NavLink>
              <Button onClick={() => signout()}>Sign out</Button>
            </>
          ) : (
            <Button onClick={() => push('signin')}>Sign in</Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}
