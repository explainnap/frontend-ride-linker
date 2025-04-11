
const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/groups`;


export const getGroups = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch groups');
    return res.json();
  } catch (error) {
    console.error('Error fetching groups:', error);
    throw error;
  }
};


export const getGroupById = async (groupId) => {
  try {
    const res = await fetch(`${BASE_URL}/${groupId}`);
    if (!res.ok) throw new Error('Failed to fetch group');
    return res.json();
  } catch (error) {
    console.error('Error fetching group:', error);
    throw error;
  }
};


export const addGroup = async (groupFormData) => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/add`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(groupFormData),
    });

    if (!res.ok) throw new Error('Failed to add group');
    return res.json();
  } catch (error) {
    console.error('Error adding group:', error);
    throw error;
  }
};


export const addRide = async (groupId, rideFormData) => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/${groupId}/add`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rideFormData),
    });

    if (!res.ok) throw new Error('Failed to add ride');
    return res.json();
  } catch (error) {
    console.error('Error adding ride:', error);
    throw error;
  }
};


export const toggleRideCompletion = async (rideId, isComplete) => {
  try {
    const res = await fetch(`${BASE_URL}/rides/${rideId}/${isComplete ? 'incomplete' : 'complete'}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed to toggle ride completion');
    return res.json();
  } catch (error) {
    console.error('Error toggling ride completion:', error);
    throw error;
  }
};
