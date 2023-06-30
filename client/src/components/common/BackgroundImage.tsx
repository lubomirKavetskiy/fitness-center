import { Icon, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IoFitnessSharp } from 'react-icons/io5';

import ImgBg from '../../video/imgBg.png';
import VideoBg from '../../video/videoBg.mp4';

export function BackgroundImage(): ReactElement {
  return (
    <div style={{ width: '100%', position: 'relative', height: '100%' }}>
      <video loop autoPlay width="100%" style={{ opacity: '.8' }}>
        <source type="video/mp4" src={VideoBg} />
        <track kind="captions" src="./friday.vtt" lang="en" />
      </video>
      <div
        style={{
          position: 'absolute',
          zIndex: 2,
          background: `url(${ImgBg}) 0 0 repeat`,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      <Text
        textAlign="center"
        fontFamily="Forum, sans-serif"
        fontSize="8em"
        color="white"
        zIndex={1}
        fontWeight="bold"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
      >
        <Icon m={4} verticalAlign="top" as={IoFitnessSharp} />
        Fitness Center
      </Text>
    </div>
  );
}
