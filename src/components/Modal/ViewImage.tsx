import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered > 
        <ModalOverlay />
        <ModalContent
          bgColor="pGray.900"
          w="auto"
          h="auto"
          maxW={['300px', '500px', '900px']}
          maxH={['350px', '450px', '600px']}
        >
          <ModalBody p={0}>
            <Image
              src={imgUrl}
              objectFit="cover"
              maxW={['300px', '500px', '900px']}
              maxH={['350px', '450px', '600px']}
            />
          </ModalBody>

          <ModalFooter bg="pGray.800" display="flex" justifyContent="flex-start" borderBottomRadius={"5px"}>
            <Link color='pGray.50' href={imgUrl} isExternal fontSize="sm">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}
