import { useState, useEffect } from "react"
import { Button } from "@components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import axios from "axios"
import { useData } from "@contexts/DataProvider"
import { getIdToken } from "firebase/auth"

type VolunteerData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  street: string
  city: string
  zip: string
}

type LogData = {
  hoursVolunteered: string
  date: string
  notes: string
}

const addVolunteer = async (token, volunteerData) => {
  console.log(token)
  const { data } = await axios.post('/api/volunteers', volunteerData, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return data;
};

export function AddVolunteerPopup() { 
  const { user } = useData();
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    const fetchToken = async () => {
      if (user) {
        const fetchedToken = await getIdToken(user);
        setToken(fetchedToken);
      }
    };
  
    fetchToken();
  }, [user]);

  const [volunteerData, setVolunteerData] = useState<VolunteerData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zip: '',
  });

  const [logData, setLogData] = useState<LogData[]>([
    { hoursVolunteered: '', date: '', notes: '' },
  ]);

  const handleVolunteerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVolunteerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Volunteer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Volunteer</DialogTitle>
          <DialogDescription>
            Add a volunteer to your organization
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">
              First Name
            </Label>
            <Input id="firstName" name="firstName" value={volunteerData.firstName} onChange={handleVolunteerChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Last Name
            </Label>
            <Input id="lastName" name="lastName" value={volunteerData.lastName} onChange={handleVolunteerChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" name="email" value={volunteerData.email} onChange={handleVolunteerChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone Number
            </Label>
            <Input id="phone" name="phone" value={volunteerData.phone} onChange={handleVolunteerChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="street" className="text-right">
              Street
            </Label>
            <Input id="street" name="street" value={volunteerData.street} onChange={handleVolunteerChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input id="city" name="city" value={volunteerData.city} onChange={handleVolunteerChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="zip" className="text-right">
              Zip Code
            </Label>
            <Input id="zip" name="zip" value={volunteerData.zip} onChange={handleVolunteerChange} className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={() => addVolunteer(token, volunteerData)}>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};
