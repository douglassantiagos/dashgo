import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";
import { useEffect } from "react";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' bg='gray.800' borderRadius={8} p='8' overflowX={['scroll', 'auto']}>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button 
                as='a' 
                size='sm' 
                fontSize='sm' 
                colorScheme='pink' 
                leftIcon={<Icon as={RiAddLine} 
                fontSize='20'/>}
                cursor='pointer'
              >
                Criar novo
              </Button>            
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4','4', '6']} color='gray.300' w='8'>
                  <Checkbox colorScheme='pink'/>
                </Th>
                <Th>Usuários</Th>
                <Th>Data de cadastro</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody direction='column'>
              <Tr>
                <Td px={['4','4', '6']}>
                 <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Douglas Santiago</Text>
                    <Text fontSize='sm' color='gray.300'>douglassantiagods@hotmail.com</Text>
                  </Box>
                </Td>
                  <Td>11 de Janeiro, 2022</Td>
                <Td>
                  <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}>
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={['4','4', '6']}>
                 <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Diego Fernandes</Text>
                    <Text fontSize='sm' color='gray.300'>diegofernandes@gmail.com</Text>
                  </Box>
                </Td>
                  <Td>03 de Março, 2022</Td>
                <Td>
                  <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}>
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={['4','4', '6']}>
                 <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Jaqueline Garcia</Text>
                    <Text fontSize='sm' color='gray.300'>garciajaque@gmail.com</Text>
                  </Box>
                </Td>
                  <Td>23 de Novembro, 2021</Td>
                <Td>
                  <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}>
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>      
    </Box>
  )
}