import { FC } from 'react'
import { Box, Button, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { AddTodoButton, TodoList, FilterTodosButton, Nav } from './components'
import { todos } from './components/TodoList/helper/data'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import images from "./assets"

const App: FC = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <main className='overflow-hidden'>
      <Nav />
      <Box bg={bg} className='p-10 flex flex-col w-screen h-screen justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-full gap-8'>
          <div className='w-max flex flex-col gap-8 justify-center items-center'>
            <div className='flex flex-row justify-center items-center gap-4'>
              {colorMode === 'light' ? <img src={images.logoText} className='w-48 sm:max-4xl:w-96' alt="logo" /> : <img src={images.logoTextWhite} className='w-48 sm:max-4xl:w-96' alt="logo" />}
              <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
            </div>
            <div className='flex justify-center items-center w-full'>
              <Stack spacing={4} direction={'row'}>
                <AddTodoButton />
                <FilterTodosButton />
              </Stack>
            </div>
          </div>
          <TodoList todos={todos} />
        </div>
      </Box >
    </main>
  )
}

export { App };