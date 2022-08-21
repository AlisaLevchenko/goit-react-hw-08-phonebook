import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const filteredContact = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContact;
  }
);
