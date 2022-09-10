/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { ExternalLink } from 'components/link';

export default function Logo({ src, srcText, ...rest }) {
  return (
    <ExternalLink
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src}  alt='Derzam_Logo'>

      </Image>

    </ExternalLink>
  );
}
