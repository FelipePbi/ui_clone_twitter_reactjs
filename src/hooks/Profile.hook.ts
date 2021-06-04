import { useState, useEffect } from 'react';

import profileData from '../profileData.json';

interface FollowSuggestion {
    name: string;
    nickname: string;
    avatar: string;
}

export interface Tweets {
    description?: string;
    retweeted?: boolean;
    date?: string;
    image?: string;
    retweets?: number;
    comments?: number;
    likes?: number;
    avatar?: string;
    name?: string;
    nickname?: string;
}

interface Profile {
    name?: string;
    nickname?: string;
    avatar?: string;
    banner?: string | null;
    description?: string | null;
    city?: string;
    country?: string;
    birth?: string;
    followers?: number;
    followings?: number;
    tweets_total?: number;
    followSuggestion?: FollowSuggestion[];
    tweets?: Tweets[];
}

const useProfile = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const newProfile = profileData;

        setTimeout(() => setProfile(newProfile), 5000);
    }, []);

    return profile;
};

export default useProfile;
