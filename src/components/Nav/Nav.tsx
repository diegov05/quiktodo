import { Button } from '@chakra-ui/react';
import { FC } from 'react'

interface NavProps {

}

const Nav: FC<NavProps> = () => {
    return (
        <nav className='
            w-full
            flex
            justify-end
            items-center
            p-2
        '>
            <ul className='
                flex
                flex-row
                gap-4
            '>
                <li>
                    <Button onClick={() => { }}>
                        Log In
                    </Button>
                </li>
                <li>
                    <Button onClick={() => { }} colorScheme='green' variant="outline">
                        Sign Up
                    </Button>
                </li>
            </ul>
        </nav>
    )
}

export { Nav };