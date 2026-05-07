const Input1 = ({ value, setValue }) => {
    return (
        <input
            type="text"
            placeholder="Type here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    );
};

export default Input1;