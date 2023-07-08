import React from 'react';

import { CarProps } from '@/types';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CardDetails = ({isOpen, closeModal, car} : CarDetailsProps) => {
  return (
    <div>CardDetails</div>
  )
}

export default CardDetails