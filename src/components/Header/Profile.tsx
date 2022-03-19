import { Avatar, Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) { 
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Douglas Santiago</Text>
          <Text color='gray.300' fontSize='small'>
            douglassantiagods@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Douglas Santiago' src='https://github.com/douglassantiagos.png' />
    </Flex>
  )
}