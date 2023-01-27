import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure()

  // SELECTED IMAGE URL STATE
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>(null)

  // FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string): void {
    setSelectedImageUrl(url)
    onOpen()
  }

  return (
    <>
      {/* CARD GRID */}
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {cards.map(item => {
          return (
            <Card data={item} key={item.id} viewImage={handleViewImage} />
          )
        })}
      </SimpleGrid>

      {/* MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImageUrl}
      />
    </>
  );
}
