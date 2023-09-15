'use client';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEvent, useState } from 'react';

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここでフォームデータをAPIに送信する処理を行います。
    // 例: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

    // フォーム送信後に'thanks'ページにリダイレクトします。
    router.push('/useRouter/thanks');
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Your Name'
        required
      />
      <input
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='Your Email'
        required
      />
      <textarea
        name='message'
        value={formData.message}
        onChange={handleTextChange}
        placeholder='Your Message'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
