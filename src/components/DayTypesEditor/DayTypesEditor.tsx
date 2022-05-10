import { useQuery } from '@apollo/client';
import { SecondaryButton } from '@entur/button';
import { MultiSelect } from '@entur/dropdown';
import { GET_DAY_TYPES } from 'api/uttu/queries';
import DayType from 'model/DayType';
import React, { useState } from 'react';
import { DayTypesModal } from './DayTypesModal';

type DayTypesData = {
  dayTypes: DayType[];
};

export const DayTypesEditor = ({
  dayTypes,
  onChange,
}: {
  dayTypes: DayType[];
  onChange: (dayTypes: DayType[]) => void;
}) => {
  const { data: allDayTypesData } = useQuery<DayTypesData>(GET_DAY_TYPES);
  const [openDayTypeModal, setOpenDayTypeModal] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <MultiSelect
          label="Select day types for this service journey"
          items={() =>
            allDayTypesData?.dayTypes.map((dt) => ({
              label: dt.name || dt.id!,
              value: dt.id!,
            })) || []
          }
          selectedItems={dayTypes?.map((dt) => ({
            label: dt.name || dt.id!,
            value: dt.id!,
          }))}
          onSelectedItemsChange={(items) => {
            const selectedIds = items.selectedItems?.map((item) => item.value);
            onChange(
              allDayTypesData?.dayTypes.filter((dt) =>
                selectedIds?.includes(dt.id!)
              ) || []
            );
          }}
        />
        <div style={{ marginLeft: '1rem' }}>
          <SecondaryButton onClick={() => setOpenDayTypeModal(true)}>
            Edit day types
          </SecondaryButton>
        </div>
      </div>
      <DayTypesModal
        open={openDayTypeModal}
        setOpen={setOpenDayTypeModal}
        dayTypes={allDayTypesData?.dayTypes!}
      />
    </>
  );
};
