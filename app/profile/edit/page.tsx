import BasicBtn from "@/components/basicBtn";
import Input from "@/components/input";

export default function ProfileEdit() {
    return (
        <form className="pt-16 pb-20 px-4 space-y-4">
            <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-full bg-slate-300" />
                <label
                    htmlFor="picture"
                    className="cursor-pointer py-2 px-3 border border-lightOrange rounded-md shadow-sm text-sm font-medium hover:bg-deepYellow hover:text-deepTeal hover:font-semibold"
                >
                    Change
                    <input
                        id="picture"
                        type="file"
                        className="hidden"
                        accept="image/*"
                    />
                </label>
            </div>
            <Input
                name="email"
                kind="email"
                label="Email address"
                required
            />
            <Input
                kind="phone"
                name="phone"
                label="Phone Number"
                required
            />
            <div className="w-full h-1" />
            <BasicBtn text="Update profile" />
        </form>
    );
}
