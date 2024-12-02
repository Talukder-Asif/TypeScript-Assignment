{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, updates: Partial<Profile>) {
    profile.name = updates?.name ? updates.name : profile.name;

    profile.age = updates?.age ? updates.age : profile.age;

    profile.email = updates?.email ? updates.email : profile.email;

    return profile;
  }
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
