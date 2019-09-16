import React, { FC } from 'react';
import { LdapUserMappingInfo } from './LdapUserMappingInfo';
import { LdapUserPermissions } from './LdapUserPermissions';
import { LdapUserGroups } from './LdapUserGroups';
import { LdapUserTeams } from './LdapUserTeams';
import { LdapUser } from 'app/types';

interface Props {
  ldapUser: LdapUser;
  showAttributeMapping?: boolean;
}

export const LdapUserInfo: FC<Props> = ({ ldapUser, showAttributeMapping }) => {
  return (
    <>
      <LdapUserPermissions permissions={ldapUser.permissions} />
      <LdapUserMappingInfo info={ldapUser.info} showAttributeMapping={showAttributeMapping} />
      {ldapUser.roles && ldapUser.roles.length > 0 && (
        <LdapUserGroups groups={ldapUser.roles} showAttributeMapping={showAttributeMapping} />
      )}
      {ldapUser.teams && ldapUser.teams.length > 0 && (
        <LdapUserTeams teams={ldapUser.teams} showAttributeMapping={showAttributeMapping} />
      )}
    </>
  );
};
