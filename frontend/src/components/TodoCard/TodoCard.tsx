import { FC } from 'react'
import { Checkbox, Stack, Tr, Td, Badge } from '@chakra-ui/react'
import { EditTodoButton } from '../EditTodoButton/EditTodoButton'
import { DeleteTodoButton } from '../DeleteTodoButton/DeleteTodoButton'

export type Todo = {
    id: string,
    task: string,
    priority?: { title: string, color: "gray" | "blue" | "orange" | "red" | "purple" }
    tags?: { title: string, color: string }[]
    deadline?: string
}

interface TodoCardProps {
    todo: Todo
}

const TodoCard: FC<TodoCardProps> = (props) => {
    const { todo } = props
    return (
        <Tr>
            <Td><Checkbox colorScheme='green'>{todo.task}</Checkbox></Td>
            <Td><Badge colorScheme={todo.priority?.color}>{todo.priority?.title}</Badge></Td>
            <Td>
                <Stack direction={"row"} spacing={2} wrap={'wrap'}>
                    {todo.tags?.map((tag => (
                        <Badge key={tag.title} colorScheme={tag.color}>{tag.title}</Badge>
                    )))}
                </Stack>
            </Td>
            <Td>{todo.deadline}</Td>
            <Td>
                <Stack direction={"row"} spacing={3}>
                    <EditTodoButton todo={todo} />
                    <DeleteTodoButton todo={todo} />
                </Stack>
            </Td>
        </Tr >
    )
}

export { TodoCard }