import { MailData } from '@sendgrid/helpers/classes/mail';
import Utils from '@tutorbook/covid-utils';
import {
  SocialTypeAlias,
  SocialInterface,
  UserWithRoles,
} from '@tutorbook/model';

export interface Email extends MailData {
  readonly html: string;
}

export interface VerificationInterface extends SocialInterface {
  label: string;
}

export type UserWithRolesAndVerifications = UserWithRoles & {
  verifications: {
    [type in SocialTypeAlias | 'school']: VerificationInterface;
  };
};

export function addVerifications(
  user: UserWithRoles
): UserWithRolesAndVerifications {
  return Object.assign(Object.assign({}, user), {
    verifications: Object.fromEntries(
      user.socials.map((social: SocialInterface) => {
        const { type, ...rest } = social;
        return [type as SocialTypeAlias, { label: Utils.caps(type), ...rest }];
      })
    ),
  }) as UserWithRolesAndVerifications;
}
