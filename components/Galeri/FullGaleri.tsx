import React, { useState, useRef, useEffect } from 'react';
import image12 from './images/image_12.jpg';
import image13 from './images/image_13.jpg';
import image14 from './images/image_11.jpg';
import { SegmentedControl, useMantineTheme } from '@mantine/core';

export const FullGaleri = () => {
  const initialData = [
    {
      id: 1,
      title: 'SEMA',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/gallery/1635239789_8d82ad1c7b2054462219.png',
    },
    {
      id: 2,
      title: 'SEMA',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/gallery/1635239834_e7b185c5c35b4e99195e.png',
    },
    {
      id: 3,
      title: 'SEMA',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/gallery/1635239850_c4254b6150179966423f.jpg',
    },
    {
      id: 4,
      title: 'SEMA',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/gallery/1635239868_1b8c370a18f5d576b1b5.jpg',
    },
    {
      id: 6,
      title: 'SEMA',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/gallery/1635239926_d7df3297ba96ca581046.png',
    },
    {
      id: 7,
      title: 'SEMA',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/gallery/1635239954_130b8ce28341c8dd2cf0.png',
    },
    {
      id: 8,
      title: 'DPM',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/cover/1607072778_30f25fc3d4f096d5ce1a.png',
    },
    {
      id: 9,
      title: 'Ketua Tingkat',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/gallery/1635240004_b9df153867e4be759859.png',
    },
    {
      id: 12,
      title: 'DPM',
      imageSrc: image12.src,
    },
    {
      id: 13,
      title: 'DPM',
      imageSrc: image13.src,
    },
    {
      id: 14,
      title: 'DPM',
      imageSrc: image14.src,
    },
    {
      id: 15,
      title: 'DPM',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/cover/1630813091_277e32d71b0942fd63a4.png',
    },
    {
      id: 16,
      title: 'Ketua Tingkat',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/cover/1602584692_524a9dc1caa5953b0fde.png',
    },
    {
      id: 17,
      title: 'Ketua Tingkat',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/cover/1631538950_f606746ecc0d0f0e70cf.png',
    },
    {
      id: 18,
      title: 'DPM',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/cover/1631538365_063516e4ed008cd4381f.png',
    },
    {
      id: 19,
      title: 'Ketua Tingkat',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/cover/1602580730_bb96681ea32afbfd92a5.png',
    },
    {
      id: 20,
      title: 'Ketua Tingkat',
      imageSrc:
        'https://pemira.stis.ac.id/assets/img/postingan/1602580479_b8ef15e9765c85742b80.jpg',
    },
    {
      id: 21,
      title: 'Ketua Tingkat',
      imageSrc: 'https://pemira.stis.ac.id/assets/img/gallery/1635239982_b6951b2c343e9eb04594.png',
    },
  ];

  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [filteredTitle, setFilteredTitle] = useState('Semua');
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modal]);

  const getImg = (imageSrc: string) => {
    setModal(true);
    setTempImg(imageSrc);
  };

  const closeModal = () => {
    setModal(false);
    setTempImg('');
  };

  const handleClickOutsideModal = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as HTMLElement)) {
      closeModal();
    }
  };

  const filterByTitle = (selectedTitle: string) => {
    if (selectedTitle === 'Semua') {
      setFilteredData(initialData);
    } else {
      const filteredData = initialData.filter((item) => item.title === selectedTitle);
      setFilteredData(filteredData);
    }
    setFilteredTitle(selectedTitle);
  };

  // @ts-ignore
  const uniqueTitles = ['Semua', ...new Set(initialData.map((item) => item.title))];

  const theme = useMantineTheme();
  const containerClass1 =
    theme.colorScheme === 'dark' ? 'container-fullgaleri-dark' : 'container-fullgaleri-light';
  const backgroundColorContainer1 =
    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0];
  const backgroundColorContainer2 = theme.colorScheme === 'dark' ? '#16213E' : '#f5f5f5';

  return (
    <div
      className={`container-fullgaleri ${containerClass1}`}
      style={{ backgroundColor: backgroundColorContainer1 }}
    >
      {/* <div className="container-fluid">
        <div className="header-fullgaleri">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              variant="outline"
              size=""
              radius="xl"
              style={{
                display: "flex",
                marginRight: "auto",
                alignItems: "left",
                padding: "12px 16px",
                fontSize: "15px",
              }}
              className="ml-auto"
              sx={{ 
                backgroundColor: theme.colorScheme === 'dark' ? '#1A1A2E' : '#0A6EBD',
                color: theme.colorScheme === 'dark' ? '#fff' : '#fff',
                '&:hover': {
                  backgroundColor: theme.colorScheme === 'dark' ? '#19376D' : '#3A1078',
                  color: theme.colorScheme === 'dark' ? '#FFD966' : '#393646',
                 }
                }
              }
            >
              <Icon.Home size={15} style={{ marginRight: "5px" }} />
              Beranda
            </Button>
          </Link>
        </div>
      </div> */}
      <div className="container-fluid">
        <div
          className={`border-fullgaleri ${containerClass1}`}
          style={{ backgroundColor: backgroundColorContainer2 }}
        >
          <div className="filter-fullgaleri">
            <SegmentedControl
              fullWidth
              color="blue"
              value={filteredTitle}
              onChange={(selectedTitle) => filterByTitle(selectedTitle)}
              data={uniqueTitles}
              style={{ marginBottom: '20px' }}
            />
          </div>
          {modal && (
            <div className="modal" onClick={handleClickOutsideModal}>
              <div className="modal-content" ref={modalRef}>
                <img src={tempImg} alt="" />
              </div>
            </div>
          )}
          <div className="fullgaleri">
            {filteredData.map((item, index) => (
              <div className="image-container" key={index}>
                <div className="image-wrapper" onClick={() => getImg(item.imageSrc)}>
                  <img src={item.imageSrc} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullGaleri;
