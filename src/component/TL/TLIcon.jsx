import Figure from 'react-bootstrap/Figure';
import Image from 'next/image';


function TLIcon(props) {
  return (
    <Image
      width={171}
      height={180}
      alt={props.TL.name}
      src={props.TL.icon}
    />
  );
}

export default TLIcon;