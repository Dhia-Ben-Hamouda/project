export type ModalProps = {
    children: React.ReactNode,
    setIsOpen: React.Dispatch<boolean>
    isOpen: boolean
}

export type Loan = {
    name: string,
    budget: string
}