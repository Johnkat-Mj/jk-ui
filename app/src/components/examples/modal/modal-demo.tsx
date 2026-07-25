"use client"

import { Button } from "@/components/jk/button"
import { Input } from "@/components/jk/input"
import { Modal, ModalBody, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from "@/components/jk/modal"


export const ModalDemo = () => {
    return (
        <>
            <Modal>
                <Button variant="outline">Rename</Button>
                <ModalContent isBlurred>
                    {({ close }) => (
                        <>
                            <ModalHeader>
                                <ModalTitle>Rename project</ModalTitle>
                                <ModalDescription>
                                    Change how this project will appear across the dashboard.
                                </ModalDescription>
                            </ModalHeader>
                            <ModalBody>
                                <Input label="Name" placeholder="Enter a name" />
                            </ModalBody>
                            <ModalFooter>
                                <ModalClose>Cancel</ModalClose>
                                <Button onPress={close}>
                                    Save changes
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
