import { DEFAULT_HELMET_META } from 'constants/helmet';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
  description?: string;
}

const HelmetMeta: FC<Props> = ({
  title = DEFAULT_HELMET_META.TITLE,
  description = DEFAULT_HELMET_META.DESCRIPTION,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default HelmetMeta;
