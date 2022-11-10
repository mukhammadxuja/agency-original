import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const useLanguage = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();

  return { t, locale };
};
