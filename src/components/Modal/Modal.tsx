import React, { FC } from 'react';
import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
} from '@chakra-ui/react';

import { CloseIcon } from '@chakra-ui/icons'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
    children,
    description,
    isOpen,
    onClose,
    title,
}) => {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                className='
                drop-shadow-md 
                border 
                border-neutral-700 
                bg-neutral-800 
                p-[25px]
                h-full 
                w-full 
                max-h-full 
                md:h-auto 
                md:max-h-[85vh]
                md:w-[90vw]
                md:max-w-[450px]
                '
            >
                <ModalHeader
                    className='
                    text-xl 
                    text-center 
                    font-bold 
                    mb-4
                '>
                    {title}
                </ModalHeader>
                <ModalBody
                    className='
                    mb-5 
                    text-sm 
                    leading-normal 
                    text-center
                    '>
                    {description}
                </ModalBody>
                {children}
                <ModalCloseButton
                    className='
                    text-neutral-400 
                    hover:text-white 
                    absolute 
                    top-[10px] 
                    right-[10px] 
                    inline-flex 
                    h-[25px] 
                    w-[25px] 
                    appearance-none 
                    items-center 
                    justify-center 
                    rounded-full 
                    focus:outline-none 
                    transition'
                    onClick={onClose}
                >
                    < CloseIcon />
                </ModalCloseButton>
            </ModalContent>
        </ChakraModal>
    );
};

export { Modal };
