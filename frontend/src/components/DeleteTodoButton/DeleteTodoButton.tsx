import { FC } from 'react'
import { Todo } from '../TodoCard/TodoCard';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import React from 'react';

interface DeleteTodoButtonProps {
    todo: Todo
}


const DeleteTodoButton: FC<DeleteTodoButtonProps> = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef(null)

    return (
        <>
            <Button onClick={onOpen} colorScheme='red' variant={"outline"} size={"sm"}>Delete</Button>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Todo
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export { DeleteTodoButton };