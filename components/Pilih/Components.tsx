import React from 'react';
import { PageSection } from '../PageSection/PageSection';
import { AccordionPilih } from './AccordionPilih';


export function Components() {
  return (
    <section id="pemilihan">
      <PageSection
        title="Bisa Pilih Siapa Saja?"
        // description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements."
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        })}
        centerTitle
      >
        <AccordionPilih />
      </PageSection>
    </section>
  );
}
