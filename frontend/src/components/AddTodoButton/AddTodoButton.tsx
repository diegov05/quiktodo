import { FC } from 'react'
import { AddIcon } from "@chakra-ui/icons"
import { Button, Stack, useDisclosure } from '@chakra-ui/react';
import { } from "chakra-react-select"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'

import { Select, CreatableSelect } from "chakra-react-select";
import { colorOptions, prioritiesOptions } from './helper/data';


const AddTodoButton: FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const mappedcolorOptions = colorOptions.map((option) => ({
        ...option,
        colorScheme: option.value,
    }));

    const mappedPrioritiesOptions = prioritiesOptions.map((option) => ({
        ...option,
        colorScheme: option.value,
    }));

    return (
        <>
            <Button onClick={onOpen} colorScheme='green' leftIcon={<AddIcon />}>Add New Todo</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Todo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack direction={'column'} spacing={'8'}>
                            <FormControl isRequired>
                                <FormLabel>Task</FormLabel>
                                <Input type='text' placeholder='Type in a task...' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Priorities</FormLabel>
                                <Select
                                    name="Priorities"
                                    options={mappedPrioritiesOptions}
                                    placeholder="Select a priority..."
                                    selectedOptionColor={"green"}
                                    closeMenuOnSelect={true}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Tags</FormLabel>
                                <CreatableSelect
                                    isMulti
                                    name="Tags"
                                    options={mappedcolorOptions}
                                    placeholder="Select some tags..."
                                    closeMenuOnSelect={false}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Deadline</FormLabel>
                                <Input
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="datetime-local"
                                />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button leftIcon={<AddIcon />} colorScheme='green' mr={3}>
                            Add
                        </Button>
                        <Button variant='outline' colorScheme='green' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export { AddTodoButton };