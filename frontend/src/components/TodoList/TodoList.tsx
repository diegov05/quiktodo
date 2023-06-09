import { FC } from 'react'
import { Todo, TodoCard } from '../TodoCard/TodoCard';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

interface TodoListProps {
    todos: Todo[]
}

const TodoList: FC<TodoListProps> = (props) => {
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>All Todos</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Task</Th>
                            <Th>Priority</Th>
                            <Th>Tags</Th>
                            <Th>Deadline</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {props.todos.map((todo) => (
                            <TodoCard todo={todo} key={todo.id} />
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Task</Th>
                            <Th>Priority</Th>
                            <Th>Tags</Th>
                            <Th>Deadline</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}

export { TodoList };