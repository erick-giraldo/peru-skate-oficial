import axios from 'axios';
import { config } from "@/config";
import { IInstagram } from '@/components/types';

const INSTAGRAM_API_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,children{id,media_url},timestamp&access_token=${config.INSTAGRAM_ACCESS_TOKEN}`;

export const fetchInstagramPosts = async () => {
  try {
    const response = await axios.get(INSTAGRAM_API_URL);
    return response.data.data as IInstagram[];
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
};

export const fetchInstagramComments = async (mediaId: string) => {
  try {
    const response = await axios.get(`https://graph.instagram.com/${mediaId}/comments?access_token=${config.INSTAGRAM_ACCESS_TOKEN}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Instagram comments:', error);
    return [];
  }
};
