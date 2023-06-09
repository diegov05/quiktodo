import { UpDownIcon } from '@chakra-ui/icons';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'

interface FilterTodosButtonProps {

}

const FilterTodosButton: FC<FilterTodosButtonProps> = () => {

    const scheme = useColorModeValue("gray", "white")

    console.log(scheme)

    return (
        <Menu>
            <MenuButton as={Button} variant={"outline"} colorScheme={scheme} leftIcon={<UpDownIcon />}>
                Filter By
            </MenuButton>
            <MenuList>
                <MenuItem>Task</MenuItem>
                <MenuItem>Priority</MenuItem>
                <MenuItem>Tags</MenuItem>
                <MenuItem>Deadline</MenuItem>
            </MenuList>
        </Menu>
    )
}

export { FilterTodosButton };