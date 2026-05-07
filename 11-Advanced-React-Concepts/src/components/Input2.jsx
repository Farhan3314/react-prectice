const Input2 = ({ value, setValue }) => {
    return (
        <input
            type="text"
            placeholder="Same value sync..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
    );
};

export default Input2;