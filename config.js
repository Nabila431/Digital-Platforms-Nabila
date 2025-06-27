
const supabaseUrl = 'https://wejcgylojzxxgftzjeew.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlamNneWxvanp4eGdmdHpqZWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MzI2ODgsImV4cCI6MjA2NjUwODY4OH0.iSE-gDfdqpmSY4VBCeGJc22kJiLIh9lg3KW5FJwMxw8';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('paymentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.getElementById('paymentAmount').value;
    const { data, error } = await supabase
        .from('payments')
        .insert([{ amount, method: 'Gopay', phone: '0895340205302' }]);
    const result = document.getElementById('verificationResult');
    if (error) {
        result.textContent = 'Error verifying payment: ' + error.message;
    } else {
        result.textContent = 'Payment of IDR ' + amount + ' verified successfully!';
    }
});

document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = document.getElementById('messageContent').value;
    // Logic to send message will go here
});
